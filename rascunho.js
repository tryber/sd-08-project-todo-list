function selected () {
    for (let index = 0; index < taskListArray.length; index += 1) {
      taskListArray[index].addEventListener('click', function () {
        for (let i = 0; i < taskListArray.length; i += 1) {
          if (taskListArray[i].className.includes('selected')) {
            taskListArray[i].classList.remove('selected');
          }
        }
        taskListArray[index].classList.add('selected');
      });
    }
  }