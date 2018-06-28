export function isParentOfTarget(selector, target, until=document.documentElement) {
    let parent = target;
    while(parent !== until) {
        if(parent.matches(selector)) {
            return parent;
        }
        parent = parent.parentNode;
    }
    return false;
}

//事件委托   element:委托的元素  selsctor:触发元素的选择器
export function delegate(element, selector, event, hanlder) {
    element.addEventListener(event, function(event) {
        const target = event.target;
        const res = isParentOfTarget(selector, target, element);
        if(!res) {
            return;
        }
        hanlder.call(res, event);
    }, false);
}