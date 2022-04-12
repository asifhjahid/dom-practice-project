const milestonesData = JSON.parse(data).data;

// load milestones data

function loadMilestones(){
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestonesData.map((milestone)=>{
        return (
            `   <div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick='openMilestone(this)'>
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules.map((module)=>{
                  return (
                      `
                      <div class="module border-b">
                        <p>${module.name}</p>
                    </div>
                      `
                  )
              }).join('')}
            </div>
          </div>`
        )
    }).join('')}`
}

function openMilestone(milestoneElement){
    const currentElement = milestoneElement.parentNode.nextElementSibling;
    const shownElement = document.querySelector('.show');
    const active = document.querySelector('.active');

    if(active && !milestoneElement.classList.contains("active")){
        active.classList.remove('active');
    }

    milestoneElement.classList.toggle('active')

   if(!currentElement.classList.contains('show') && shownElement)
         shownElement.classList.remove('show');
   


    currentElement.classList.toggle('show');
}

loadMilestones();