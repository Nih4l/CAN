import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Select, { defaultTheme } from 'react-select'


const MedicinePopup = ({toggleMedicine}) => {
  //   const [medicine, setMedicine]=useState(true);
  // const toggleMedicine= ()=>{
  //   setMedicine(!medicine);
  // }
  const [medicineCount, setMedicineCount] = useState(1);
  const [deleteMedicine, setDeleteMedicine] = useState(false);
  const [time, setTime] = useState();
  const [reminderTime, setReminderTime] =useState(false);

  const handleTimeChange = (value) => {
    setTime(value && value.format('hh:mm A'));
  };
  const mealOptions = [
    { value: "Before Breakfast", label: "Before Breakfast" },
    { value: "After Breakfast", label: "After Breakfast" },
    { value: "Before Lunch", label: "Before Lunch" },
    { value: "After Lunch", label: "After Lunch" },
    { value: "Before Dinner", label: "Before Dinner" },
    { value: "After Dinner", label: "After Dinner" },

  ];
 
  
 
  
  
const handleAddMedicine = () => {
  setMedicineCount(medicineCount + 1);
};
const customStyles = {
  control: (state) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    padding:'8px',
    width:'100%',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:  'white',
    
    color:'black',
    '&:hover': {
      backgroundColor: '#EFC31968',
      color: 'white'
    }
  }),
  menu: (provided) => ({
    ...provided,
    width: '70%', // Set your desired width here
    
  }),
 
};
  const handleReminder=()=>{
    setReminderTime(!reminderTime);
  }


  const handleDeleteMedicine=()=>{
    setDeleteMedicine(true);
  }
 
  return (
    

    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 overflow-y-scroll overscroll-y-auto'>
    <div className=' flex flex-col bg-white rounded-[40px] lg:md:w-auto lg:md:h-auto w-full px-10 m-3'>
    <div className='flex flex-row py-4 justify- items-center w-full'>
       <h1 className='text-[22px] font-[500]'>Add Medicines</h1>
        <RxCross2 className=' lg:md:ml-80 cursor-pointer' onClick={toggleMedicine}/>
    </div>
    <div className='flex flex-col'>
        <form>
         
         {[...Array(medicineCount)].map((_, index) => (
    <div key={index}>
        <label className='text-[16px] font-[500]'> Medicine {index + 1} </label>
        <div className='flex py-2 gap-6'>
       
        <input type='text' placeholder='Medicine *' className='border rounded-[20px] p-3 w-1/2' />
       
        <input type='text' placeholder='Type' className='border rounded-[20px] p-3 w-1/2'/>
        </div >
        <div  className='flex py-2 gap-6'>
        <input type='text' placeholder='Dose' className='border rounded-[20px] p-3 w-1/2'/>
        <input type='text' placeholder='Unit' className='border rounded-[20px] p-3 w-1/2'/>
        </div>
        <div  className='flex py-4 gap-6'>
        <Select options={mealOptions} className='border rounded-[20px] w-1/2' placeholder={'Meal'} styles={customStyles}/>
        {/* <TimePicker onChange={handleTimeChange} showSecond={false} defaultValue={time} */}
    {/* format="hh:mm A" className='border rounded-[20px] w-1/2' placeholder='Meal time' appearance='none' style={{ appearance:'none', width: '50%', outline:'none', borderRadius:'20px'}}/> */}
    <input placeholder="Time to take medicine" type="text" onFocus={(e) => {e.target.type = 'time';}} id="medicineTime" className="border rounded-[20px] p-3 w-1/2"/>        

        
         
        </div>
        </div>))}
        <label className='text-[16px] font-[500]'>Select Date</label>
        <div  className='flex py-2 gap-6'>
        
        <input placeholder="Start from" type="text" onFocus={(e) => {e.target.type = 'date';}} id="startDate" className="border rounded-[20px] p-3 w-1/2"/>        
        <input placeholder="Stop on" type="text" onFocus={(e) => {e.target.type = 'date';}} id="stopDate" className="border rounded-[20px] p-3 w-1/2"/>        

        </div>
        <div className='flex gap-6'>
        <input type='checkbox' className="appearance-none w-4 h-4 border-2 border-pink-500 rounded-sm bg-white mt-1 shrink-0 checked:bg-pink-500 checked:border-pink-500" onChange={handleAddMedicine}/> Add another medicine
        </div>
        <div  className='flex flex-row gap-6 py-2'>
        <input type='checkbox' className="appearance-none w-4 h-4 border-2 border-pink-500 rounded-sm bg-white mt-1 shrink-0 checked:bg-pink-500 checked:border-pink-500" onChange={handleReminder}/>
Remind me to take medicine
        </div>

        {reminderTime && (
          
          <div  className=' flex flex-col py-2 w-full'>
        <input type="time" className='border rounded-[20px] p-3 w-full'  />
        </div>
        )}
        
        <div className='flex flex-row py-2 gap-4 justify-end'>
            <button className='border-2 px-6 py-2 rounded-[15px]' onClick={handleDeleteMedicine}>Cancel</button>
           
            <button className='border-2 px-6 py-2 rounded-[15px] bg-[#EFC31966]'><Link to='/Medicine1'>Save</Link></button>
        </div>
      
        </form>
    </div>   
  
</div>
</div>
 )
}

export default MedicinePopup