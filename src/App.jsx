import { useDispatch, useSelector } from 'react-redux'
import { Addition, Substraction, Multiplication, Devision } from './Redux/Slice/Counter'

function App() {

  const Work = [
    {
      name: "Addition",
      funcanality: () => dispatch(Addition()),


    },
    {
      name: "Substraction",
      funcanality: () => dispatch(Substraction())

    },
    {
      name: "Multiplication",
      funcanality: () => dispatch(Multiplication())

    },
    {
      name: "Devision",
      funcanality: () => dispatch(Devision())

    },
  ]

  const InitialValue = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div className=' flex flex-col justify-center items-center pt-20'>

        <h1 className=' text-6xl font-semibold mb-12 '>{InitialValue}</h1>


        <div className=' flex gap-4'>

          {
            Work.map((item) => (
              <button className=' bg-blue-600  px-5 py-1 text-white rounded-md shadow-lg hover:bg-blue-900 font-semibold' onClick={item.funcanality} >{item.name}</button>

            ))
          }



        </div>

      </div >


    </>
  )
}

export default App
