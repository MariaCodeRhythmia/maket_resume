
/*
if (!localStorage.getItem('project')) {
  localStorage.setItem('project', null);
} else {
  console.log('project : ' + localStorage.getItem('project'));
  readFile('/project.json');
  delete localStorage.project;
}


function parsFile(text) {
  console.log(text);
}

function readFile(file) {
       var rawFile = new XMLHttpRequest();

        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4) //4: операция запершена
            {
                if(rawFile.status === 200 || rawFile.status == 0) // UNSENT: 0, OPENED: 0, LOADING: 200, DONE: 200
                {
                    var allText = rawFile.responseText;
                    parsFile(allText);
                }
            }
        }
        rawFile.send(null);
}
*/
function gotoProject(element, i) {
  if (element) {
    localStorage.setItem('project', i + '');
  //  console.log(element, i);
  //  console.log('/proj' + i + '.html');
    window.location.href = '/proj' + i + '.html';
  }
}

document.addEventListener('click', function(event) {
  const target = event.target;
  const count_projects = 6;

  for(let i = 0; i < count_projects; i++){
    gotoProject(target.classList.contains(i + ''), i);
  }
});
