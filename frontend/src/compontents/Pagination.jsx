import React from 'react';

export default class Pagination extends React.Component{

    handleButtonClick = (event)=>{
        const {current,pageSize,onChange} = this.props;
        const {to} = event.target.dataset;
        switch (to) {
            case "pre":
                onChange(current-1,pageSize);
                break;
            case "next":
                onChange(current+1,pageSize);
                break;
            default:
                onChange(Number.parseInt(to),pageSize);
                break;
        }
    }
    render(){
        const {total,current,pageSize,buttonSize} = this.props;
        const buttonList = [];
        const pageCount = Math.round(total/pageSize)||1;
        const size = pageCount<buttonSize ? pageCount : buttonSize ;
        let start = (current-Math.floor(size/2))<=1 ? 1 : current-Math.floor(size/2);
        start = ((start+size)>pageCount?pageCount-size+1:start);
        for(let i = start;i<start+size;i++){
            buttonList.push(
                <button
                    data-to={i}
                    onClick={this.handleButtonClick}
                    title={i}
                    key={i}
                    className={`btn-small ${current===i?'btn-success':''}`}>{i}</button>
            );
        }
        const canLeftClick = (current===1) ? false : true;
        const canRightClick = (current===pageCount) ? false : true;
        return (
            <footer>
                <button
                    title="上一页"
                    data-to="pre"
                    className={`btn-small ${canLeftClick?"":"disabled"}`}
                    onClick={canLeftClick?this.handleButtonClick:null}
                >&lt;</button>
                {buttonList}
                <button
                    title="下一页"
                    data-to="next"
                    className={`btn-small ${canRightClick?"":"disabled"}`}
                    onClick={canRightClick?this.handleButtonClick:null}
                >&gt;</button>
            </footer>
        );
    }
}