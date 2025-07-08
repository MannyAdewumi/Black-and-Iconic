const Button = ({label, iconURL}) => {
  return (
    <button className='bg-white text-obsedian font-poppins font-medium px-8 py-2 rounded-full hover:font-semibold hover:bg-gray-300 transition mx-auto mt-6'>
       {label}
    </button>

  )
}

export default Button;