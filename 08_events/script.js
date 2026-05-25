// onclick
    document.getElementById('owl').onclick = function(){
        // alert('owl clicked')
    }
    
    // add event listener
    document.getElementById('owl').addEventListener('click', function(e){
        // alert('owl clicked again')
        // console.log(e);
    },false)        // (false) event propogation
    
    // attachEvent(old used in internet explorer)
    // jQuery - on
    
    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode
    

    // 1. inside to outside (bubbling effect)
    document.getElementById('images').addEventListener('click', function(){
        // alert('clicked inside the ul')
    },false)
    document.getElementById('owl').addEventListener('click', function(){
        // alert('owl clicked')
    },false)



    // 2. outside to inside (capturing effect)
    document.getElementById('images').addEventListener('click', function(){
        // alert('clicked inside the ul')
    },true)
    document.getElementById('owl').addEventListener('click', function(){
        // alert('owl clicked')
    },true)



    // 3. stopPropagation
    document.getElementById('images').addEventListener('click', function(e){
        // console.log('clicked inside the ul')
    },false)
    document.getElementById('owl').addEventListener('click', function(e){
        //console.log('owl clicked');
        //e.stopPropagation();
    },false)
    

    document.getElementById('google').addEventListener('click', function(e){
        //console.log('google clicked');
        //e.preventDefault();
    },false)
    
    // REMOVING IMAGES ON CLICK
    document.querySelector('#images').addEventListener('click',function(event){
        console.log(event.target.tagName);
        if(event.target.tagName === 'IMG'){
            console.log(event.target.id);
            let removeIt = event.target.parentNode
            removeIt.remove()
        }
        // or 
        // removeIt.parentNode.removeChild(removeIt)
    },false)