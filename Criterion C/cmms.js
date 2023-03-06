const cmmCont = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (comment) {
   addComment(comment);
});

function addComment(comment) {
    let cmmtxt, wrapDiv;
    
    const cmmBox = document.createElement('div');
    
    const replybtn = document.createElement('button');
    replybtn.className = 'reply';
    replybtn.innerHTML = 'Reply';
    
    const delbtn = document.createElement('button');
    delbtn.innerHTML = 'Delete';
    delbtn.className = 'delete';
    
    if(hasClass(comment.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        
        cmmtxt = document.getElementById('comment').value;
        document.getElementById('comment').value='';
        
        cmmBox.innerHTML = cmmtxt;
        cmmBox.style.backgroundColor = "#E6E6FA";
        cmmBox.style.fontFamily = "DM Sans"
        cmmBox.style.padding = "20px"
        
        wrapDiv.append(cmmBox, replybtn, delbtn);
        cmmCont.appendChild(wrapDiv);
    } else {
        wrapDiv = comment.target.parentElement;
        cmmtxt = comment.target.parentElement.firstElementChild.value;
        
        cmmBox.innerHTML = cmmtxt;
        cmmBox.style.backgroundColor = "#E6E6FA";
        cmmBox.style.fontFamily = "DM Sans"
        cmmBox.style.padding = "20px"
        
        wrapDiv.innerHTML = '';
        wrapDiv.append(cmmBox, replybtn, delbtn);
    }
}

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

document.getElementById('allComments').addEventListener('click', function (i) {
    if (hasClass(i.target, 'reply')) {
        const parentDiv = i.target.parentElement;
        const wrapDiv = document.createElement('div');
        
        wrapDiv.style.marginLeft = 
            (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '20px';
        
        const addbtn = document.createElement('button');
        addbtn.className = 'addReply';
        addbtn.innerHTML = 'Add';
        
        wrapDiv.append(textArea, addbtn);
        parentDiv.appendChild(wrapDiv);

    } else if(hasClass(i.target, 'addReply')) {
        addComment(i);
    } else if(hasClass(i.target, 'delete')) {
        i.target.parentElement.remove();
    }
});