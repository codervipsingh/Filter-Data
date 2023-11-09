const tableData =[
    {
        name:'Alfreds Futterkiste',
        country: 'Germany'
    },

    {
        name:'Jhon',
        country: 'England'
    },
    
    {
        name:'Virendra',
        country: 'India'
    },

    {
        name:'Monk',
        country: 'Germany'
    },

    {
        name:'Devid',
        country: 'UK'
    },

    {
        name:'Alfreds ',
        country: 'USA'
    },
    {
        name:'Max ',
        country: 'UAE'
    },
    {
        name:'Monk',
        country: 'Germany'
    },

    {
        name:'Devid',
        country: 'UK'
    },

    {
        name:'Alfreds ',
        country: 'USA'
    },
    {
        name:'Max ',
        country: 'UAE'
    }
    
    


]
const searchData = () => {
    const tbody = document.getElementById('tableBody');
    let tr ='';

  for (let data of tableData){
   const trString = 
    `<tr>
    <td>${data.name}</td>
    <td>${data.country}</td>
  </tr>`;
  tr += trString;
}

  tbody.innerHTML=tr;

};
searchData();


const searchInput = document.getElementById('inputBox');
searchInput.addEventListener('keyup', (e) => {
    const userInput = e.target.value.toLocaleLowerCase();
    const filterData =  tableData.filter((item) => {
        console.log(item);
      if(item.name.toLocaleLowerCase().includes(userInput)){
        return true;
      }
      return false;
    });

    const tbody = document.getElementById('tableBody');
    tbody.innerHTML ="";
    let tr ='';
    for (let data of filterData){
        const trString = 
         `<tr>
         <td>${data.name}</td>
         <td>${data.country}</td>
       </tr>`;
       tr += trString;
     }
     
       tbody.innerHTML=tr;
});