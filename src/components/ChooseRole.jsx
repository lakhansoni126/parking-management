import React from 'react'

const ChooseRole = ({ open, onSelectRole }) => {
  return (
    <>
      <div className={`fixed z-10 inset-0 overflow-y-auto ${open ? '' : 'hidden'}`}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <h2 className="text-lg font-bold mb-4">Select Your Role</h2>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 w-full" onClick={() => onSelectRole('users')}>users</button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 w-full" onClick={() => onSelectRole('guards')}>guards</button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 w-full" onClick={() => onSelectRole('buildings')}>building</button>
            </div>
          </div>
        </div>
      </div>
      {/* <section className='bg-[#191825]${open ? '' : 'hidden'}'>
        <div className='text-white h-screen flex gap-10 justify-center items-center'>
            <div className='flex justify-center items-center border-2 w-64 h-20'  onClick={() => onSelectRole('users')><a className='' href=""> Login as a User 🚀</a></div>
            <div className='flex justify-center items-center border-2 w-64 h-20' onClick={() => onSelectRole('guards')}><a className='' href=""> Login as a Guard 🚀</a></div>
            <div className='flex justify-center items-center border-2 w-64 h-20' onClick={() => onSelectRole('buildings')}><a className='' href=""> Login as a Building 🚀</a></div>
        </div>
    </section> */}
    </>
  )
}

export default ChooseRole
