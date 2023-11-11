        // Load tasks from cookies on page load
        window.onload = function () {
            loadTasks();
        };

        // Save tasks to cookies
        function saveTasks() {
            var tasks = document.getElementById('ft_list').children;
            var taskArray = Array.from(tasks).map(task => task.innerText);
            document.cookie = 'tasks=' + JSON.stringify(taskArray);
        }

        // Load tasks from cookies
        function loadTasks() {
            var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)tasks\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            if (cookieValue) {
                var tasks = JSON.parse(cookieValue);
                tasks.forEach(function (task) {
                    addTaskToDOM(task);
                });
            }
        }

        // Open a prompt to add a new task
        function openTaskPrompt() {
            var taskText = prompt("Enter a new task:");
            if (taskText !== null && taskText !== "") {
                addTaskToDOM(taskText);
                saveTasks();
            }
        }

        // Add a task to the DOM
        function addTaskToDOM(taskText) {
            var ftList = document.getElementById('ft_list');
            var task = document.createElement('div');
            task.className = 'task';
            task.innerHTML = taskText;

            // Remove task on click
            task.onclick = function () {
                if (confirm("Do you want to remove this task?")) {
                    ftList.removeChild(task);
                    saveTasks();
                }
            };

            // Add task to the top of the list
            ftList.insertBefore(task, ftList.firstChild);
        }