const milestonesData = JSON.parse(data).data;

// load milestones data

function loadMilestones(){
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestonesData.map((milestone)=>{
        return (
            `   <div class="milestone border-b" id='${milestone._id}'>
            <div class="flex">
              <div class="checkbox"><input type="checkbox" onclick='markMileStone(this, ${milestone._id})' /></div>
              <div onclick='openMilestone(this, ${milestone._id})'>
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

function openMilestone(milestoneElement,id){
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
    

    showMilestone(id);
}

function showMilestone(id){
  const milestoneImage = document.querySelector('.milestoneImage');
  const milestoneName = document.querySelector('.title');
  const milestoneDesc = document.querySelector('.desc');

  milestoneImage.style.opacity='0';
  milestoneImage.src = milestonesData[id].image;
  milestoneName.innerText = milestonesData[id].name;
  milestoneDesc.innerText = milestonesData[id].description;

}

const milestoneImage = document.querySelector('.milestoneImage');

milestoneImage.onload = function(){
  this.style.opacity = '1'
}


function markMileStone (checkbox,id){
  const markMilestoneList = document.querySelector('.milestones');
  const doneList = document.querySelector('.doneList');

  const markItem = document.getElementById(id)

  if(checkbox.checked){
    markMilestoneList.removeChild(markItem);
    doneList.appendChild(markItem)
  }else{
    markMilestoneList.appendChild(markItem);
    doneList.removeChild(markItem);
  }
}
loadMilestones();