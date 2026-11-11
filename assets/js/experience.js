/* Accessible tabs, opt-in video and before/after views. */
document.querySelectorAll('[data-process]').forEach(root => {
  const tabs=[...root.querySelectorAll('[role="tab"]')];
  const panels=[...root.querySelectorAll('[role="tabpanel"]')];
  let active=0;
  function select(index,focus=false) {
    active=(index+tabs.length)%tabs.length;
    tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===active));tab.tabIndex=i===active?0:-1;});
    panels.forEach((panel,i)=>{panel.hidden=i!==active;if(i!==active)panel.querySelectorAll('video').forEach(video=>video.pause());});
    if(focus)tabs[active].focus();
  }
  root.querySelector('[role="tablist"]').hidden=false;
  root.querySelectorAll('.production-controls').forEach(element=>{element.hidden=false;});
  tabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>select(i));
    tab.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
      event.preventDefault();select(event.key==='Home'?0:event.key==='End'?tabs.length-1:active+(event.key==='ArrowRight'?1:-1),true);
    });
  });
  root.querySelectorAll('[data-process-prev]').forEach(button=>button.addEventListener('click',()=>select(active-1,true)));
  root.querySelectorAll('[data-process-next]').forEach(button=>button.addEventListener('click',()=>select(active+1,true)));
  select(0);
});

document.querySelectorAll('[data-print]').forEach(button=>{button.hidden=false;button.addEventListener('click',()=>window.print());});
document.querySelectorAll('[data-checklist]').forEach(root=>{
  const boxes=[...root.querySelectorAll('input[type="checkbox"]')];
  root.addEventListener('change',()=>{root.querySelector('[data-checklist-status]').textContent=`Provjereno: ${boxes.filter(box=>box.checked).length} / ${boxes.length}`;});
});

document.querySelectorAll('[data-comparison]').forEach(root=>{
  const pairs=[...root.querySelectorAll('[data-pair]')];
  const selector=root.querySelector('[data-comparison-part]');
  const buttons=[...root.querySelectorAll('[data-compare-view]')];
  let view='both';
  function render(){
    pairs.forEach((pair,i)=>{
      pair.hidden=String(i)!==selector.value;
      pair.querySelector('.comparison-grid').classList.toggle('single',view!=='both');
      pair.querySelectorAll('[data-comparison-side]').forEach(figure=>{figure.hidden=view!=='both'&&figure.dataset.comparisonSide!==view;});
    });
    buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.compareView===view)));
  }
  root.querySelector('.comparison-tools').hidden=false;
  selector.addEventListener('change',render);
  buttons.forEach(button=>button.addEventListener('click',()=>{view=button.dataset.compareView;render();}));
  render();
});
