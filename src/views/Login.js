import React, {useState, useContext} from 'react'
import { DataContext } from '../context/DataContext'
import {AiOutlineMenu} from 'react-icons/ai'
import md5 from 'md5'
import Swal from 'sweetalert2'


export default function Login() {
    // Context
    const {login, signup} = useContext(DataContext)

    // Estado para poder mostrar el modal de creación de cuenta o inicio de sesión
    const [modal, setModal] = useState(false)
    // State para mostrar crear cuenta o simplemente hacer login
    const [crear, setCrear] = useState(false)
    // States para hacer login
    const [usuario, setUsuario] = useState()
    const [clave, setClave] = useState()
    // States para hacer la creación de la cuenta en orden
    const [nombre, setNombre] = useState()
    const [mail, setMail] = useState()
    const [celular, setCelular] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    // States móvil
    const [toggleMenu, setToggleMenu] = useState(false)


    // Funciones
    // Función para crear al usuario
    const handleSignup = (e) => {
        e.preventDefault()
        if(nombre && celular && mail && password && confirmPassword){
            if(password === confirmPassword){
                // Se hace la creación de la cuenta
                const data = {
                    name:nombre,
                    clave:md5(password),
                    mobile:celular,
                    email:mail,
                }
                signup(data)
                console.log("Se paso")
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: 'Las contraseñas no coinciden!',
                })
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Se deben llenar correctamente los campos!',
            })
        }
    }
    // Función para hacer el login del Usuario
    const handleLogin = (e) => {
        e.preventDefault()
        if(usuario){
            const data = {
                usuario:usuario,
                clave: md5(clave)
            }
            login(data)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Se deben llenar correctamente los campos!',
            })
        }
    }
  return (
    <div className='w-full min-h-screen bg-gradient-to-tr from-blue-300 to-blue-800'>

        {/* Versión WEB */}    
        <div className='hidden sm:flex flex-col'>

            {/* Header */}
            <div className='fixed top-0 left-0 w-full flex flex-row justify-between items-center bg-white h-[70px]'>
                <div className='flex flex-row items-center ml-[15%]'>
                    <p className='font-bold text-sky-500 text-[25px]'>Platilla React</p>
                </div>
                <div className='flex flex-row mr-[15%]'>
                    <button 
                        className='bg-sky-400 font-mono font-bold text-white py-1 px-2 rounded-xl hover:bg-sky-300 mr-[15px]'
                        onClick={()=>{
                            setModal(true)
                            setCrear(false)
                        }}
                    >
                        Iniciar Sesión
                    </button>
                    <button 
                        className='bg-slate-400 font-mono font-bold text-white py-1 px-2 rounded-xl hover:bg-slate-300 mr-[15px]'
                        onClick={()=>{
                            setModal(true) 
                            setCrear(true)
                        }}
                    >
                        Crear cuenta
                    </button>
                </div>
            </div>

            {/* Contenido */}
            <div className='mx-[15%] mt-[70px] bg-slate-100 min-h-screen'>
                <div className='flex flex-col justify-center items-center mx-[10%] text-center font-mono text-slate-600'>
                    <p className=' my-[30px] text-[45px] text-slate-500'>Título</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe libero, accusamus, assumenda at porro expedita esse odit sunt, iusto magni. Doloremque repudiandae delectus quae neque maxime illum voluptatum, illo animi, praesentium eum debitis sint rem impedit eius adipisci facere quia dicta veritatis saepe hic architecto possimus. Animi aspernatur error enim optio obcaecati molestias consequuntur aut quam ipsum ab sapiente voluptates eius aperiam, incidunt minus modi magnam recusandae saepe reiciendis officia tempore nostrum repellendus. Minus, facere officiis aliquam eum soluta nisi rerum voluptatibus ducimus doloremque error quae cumque recusandae. Neque quaerat, repudiandae ex, eum nesciunt tenetur voluptatibus laborum magnam laudantium provident cumque optio excepturi hic eligendi rerum eveniet nostrum, expedita fuga ullam? Quae rerum ad nemo accusamus fuga saepe ipsum incidunt similique sit laudantium, sequi perferendis aspernatur nostrum omnis a voluptatum, soluta harum vitae id dolore blanditiis natus ducimus inventore enim. Maxime a totam cum unde corporis, ea esse. Maxime, pariatur nemo deleniti, maiores laborum sit illum non quia perferendis vero voluptates nulla odio, beatae qui tempore unde deserunt veniam. Molestias, asperiores alias optio perferendis vel, doloribus natus explicabo enim a excepturi ullam quam neque! Nesciunt, temporibus! Quaerat quos consectetur, facere provident dignissimos dolore nisi fugiat sed ipsam voluptates soluta sit, aut mollitia illo iste, exercitationem magnam minus quas impedit assumenda molestiae accusantium id reiciendis! Dolorem quidem consectetur perferendis delectus provident harum accusantium unde aspernatur consequuntur illum magnam sed dolore, eaque ullam aliquid doloribus quaerat culpa cupiditate voluptates odit nesciunt porro atque nulla. Eveniet suscipit aperiam distinctio ipsa molestias ipsum. Tempora odio iusto nemo dolorum maxime accusamus animi, perferendis reprehenderit aliquid ipsam ut odit omnis aliquam laborum quis? Officiis omnis veritatis labore recusandae atque sequi earum commodi architecto nihil consequatur quod natus quis cumque assumenda reprehenderit, maiores qui quas id rem fugiat perferendis numquam! Expedita ratione quis cumque possimus odit ut quos perspiciatis maiores quisquam molestias. Placeat, sed nulla. Reprehenderit asperiores voluptatum ipsam doloribus corporis a reiciendis, impedit id exercitationem assumenda iure temporibus rerum suscipit et explicabo minus fugiat. Voluptas soluta deleniti ipsa modi, consectetur earum laborum reprehenderit delectus tenetur laboriosam, similique esse inventore dignissimos beatae quidem perspiciatis. Repudiandae earum, tempore voluptatem nihil voluptatibus deserunt reiciendis fuga qui et assumenda, possimus soluta, accusantium impedit. Beatae in itaque nam reiciendis, aut dolore aspernatur amet ullam minima ducimus fugiat iste quis sint nulla culpa iusto, doloremque debitis ad quaerat numquam? Amet, inventore. Quo hic odit quidem vel a eum eius ipsa ipsam ea dolore omnis, dolores earum asperiores quaerat nesciunt tempore, magnam nobis sunt voluptatum? Odit pariatur dolor magnam corrupti soluta laborum tenetur optio, distinctio ipsa, maxime quaerat possimus cumque voluptate! Quae reiciendis nostrum doloremque deleniti ex praesentium quo quasi iusto eaque ipsam exercitationem, temporibus assumenda facere enim nisi provident, natus aut. Tenetur nesciunt velit alias voluptatem provident, numquam at sit nostrum expedita in ad architecto illo? Ipsum ratione corrupti distinctio asperiores neque dolores, maiores iure aperiam adipisci delectus! Beatae atque sunt mollitia sed pariatur fugit, tempore quos veritatis quae, modi ratione magni fugiat aperiam, totam culpa expedita possimus ullam soluta minima.</p>
                </div>
            </div>
            {modal ?
                <div className='fixed top-0 left-0 bg-slate-600 w-full h-screen bg-opacity-80 flex justify-center items-center'>
                    {crear ?
                     <div className='flex flex-col items-center justify-center bg-sky-300 opacity-100 py-[30px] px-[60px] min-w-[450px] rounded-[40px] border-2 border-white'>
                        <form onSubmit={handleSignup} className='flex flex-col w-full'>
                            <p className='text-center text-[25px] font-bold text-white mb-4'>Crear Cuenta</p>
                            <label className='text-white font-mono font-semibold mb-1'>Nombre Completo:</label>
                            <input onChange={(e)=> setNombre(e.target.value)} className='rounded-md mb-3 py-1 px-3 text-blue-800 outline-none' placeholder='Nombre' type="text" />
                            <label className='text-white font-mono font-semibold mb-1'>Celular:</label>
                            <input onChange={(e)=> setCelular(e.target.value)} className='rounded-md mb-3 py-1 px-3 text-blue-800 outline-none' placeholder='Teléfono celular' type="text" />
                            <label className='text-white font-mono font-semibold mb-1'>E-mail:</label>
                            <input onChange={(e)=> setMail(e.target.value)} className='rounded-md mb-3 py-1 px-3 text-blue-800 outline-none' placeholder='ejemplo@gmail.com' type="text" />
                            <label className='text-white font-mono font-semibold mb-1'>Contraseña:</label>
                            <input autoComplete='new-password' onChange={(e)=> setPassword(e.target.value)} type='password' className='rounded-md mb-3 py-1 px-3 text-blue-800 outline-none' placeholder='Contraseña'/>
                            <label className='text-white font-mono font-semibold mb-1'>Repetir Contraseña:</label>
                            <input onChange={(e)=> setConfirmPassword(e.target.value)} type='password' className='rounded-md mb-3 py-1 px-3 text-blue-800 outline-none' placeholder='Repetir contraseña'/>
                        </form>
                        <div className='flex flex-row items-center justify-between w-full mt-3'>
                            <button 
                                className='bg-red-500 py-1 px-5 text-white font-semibold font-mono rounded-md ml-5 hover:bg-red-400'
                                onClick={()=>{
                                    setModal(false)
                                    setCrear(false)
                                }}
                            >
                                Cancelar
                            </button>
                            <button 
                                className='bg-green-500 py-1 px-5 text-white font-semibold font-mono rounded-md mr-5 hover:bg-green-400'
                                type='submit'
                                onClick={handleSignup}
                            >
                                Siguiente
                            </button>
                        </div>        
                     </div>
                     :
                     <div className='flex flex-col items-center justify-center bg-sky-300 opacity-100 py-[30px] px-[60px] min-w-[450px] rounded-[40px] border-2 border-white'>
                        <form autoComplete='off' onSubmit={handleLogin} className='flex flex-col w-full'>
                            <p className='text-center text-[25px] font-bold text-white mb-4'>Inicio De Sesión</p>
                            <label className='text-white font-mono font-semibold mb-1'>Email:</label>
                            <input className='rounded-md mb-3 py-1 px-3 text-blue-800 outline-none' placeholder='email' type="text" onChange={(e)=>setUsuario(e.target.value)}/>
                            <label className='text-white font-mono font-semibold mb-1'>Contraseña:</label>
                            <input className='rounded-md mb-3 py-1 px-3 text-blue-800 outline-none' placeholder='contraseña' type="password" onChange={(e)=>setClave(e.target.value)}/>
                        </form>
                        <div className='flex flex-row items-center justify-between w-full mt-3'>
                            <button 
                                className='bg-red-500 py-1 px-5 text-white font-semibold font-mono rounded-md ml-5 hover:bg-red-400'
                                onClick={()=>{
                                    setModal(false)
                                    setCrear(false)
                                }}
                            >
                                Cancelar
                            </button>
                            <button 
                                className='bg-green-500 py-1 px-5 text-white font-semibold font-mono rounded-md mr-5 hover:bg-green-400'
                                type='submit'
                                onClick={handleLogin}
                            >
                                Siguiente
                            </button>
                        </div>
                     </div>
                    }
                </div>
                :
                <></>
            }

            {/* FOOTER */}
            <div className='w-full bg-white flex flex-row py-3 px-5 items-center justify-between'>
                <div className='flex flex-col ml-[5%]'>
                    <p className='font-bold text-sky-400'>© 2022</p>
                    <p className='font-bold text-sky-400'>TODOS LOS DERECHOS RESERVADOS</p>
                </div>
                <div className='flex flex-col mr-[5%]'>
                    <p className='font-bold text-sky-400'>Sitio desarrollado por:</p>
                    <p className='font-bold text-sky-400'>Andrés Poepsel Vásquez</p>
                </div>
            </div>
        </div>

        {/* Versión MÓVIL */}
        <div className='flex flex-col mx-0 sm:hidden'>
            {/* Header */}
            <div className='fixed top-0 left-0 w-full flex flex-row justify-between items-center bg-white h-[70px]'>
                <div className='flex items-center'>
                    <p className='font-bold text-sky-500 text-[25px] ml-[5%]'>Plantilla React</p>
                </div>
                <div className='flex flex-row mr-[5%]' onClick={()=>setToggleMenu(!toggleMenu)}>
                    <AiOutlineMenu className='fill-sky-500' size={25}/>
                </div>
            </div>
            {/* Menú dinámico */}
            {toggleMenu && 
                <div className='fixed top-[70px] w-full left-0'>
                    <ul className='bg-slate-700 py-5 flex flex-col justify-center items-center'>
                        <li
                            className='bg-sky-500 py-1 px-3 text-white rounded-md border-2 border-white'
                        >
                            Iniciar Sesión
                        </li>
                        <li
                            className='bg-sky-500 py-1 px-3 text-white mt-3 rounded-md border-2 border-white'
                        >
                            Crear Cuenta
                        </li>
                    </ul>
                </div>
            }
            {/* Contenido */}
            <div className='mx-[4%] mt-[70px] bg-slate-100 min-h-screen'>
                <div className='flex flex-col justify-center items-center mx-[5%] text-center font-mono text-slate-600'>
                    <p className=' my-[30px] text-[25px] text-slate-500'>Título</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ad ipsam quidem, libero sint, amet, natus consequuntur in iste nostrum corrupti corporis ducimus suscipit culpa labore adipisci autem quaerat! Similique, exercitationem modi. Voluptates facere reprehenderit laboriosam, hic error dolores sint magnam et vero blanditiis ullam veritatis consequuntur rerum. Ea distinctio unde, odit accusantium hic quos numquam, eius inventore expedita excepturi, fuga quod beatae voluptate ipsa soluta repudiandae nesciunt architecto pariatur consectetur in? Impedit consequuntur consequatur, suscipit, distinctio maxime minus porro soluta optio nisi, iure delectus sapiente vitae! Culpa quaerat omnis, architecto corrupti voluptatem sed, expedita dicta nam atque perferendis soluta provident dolor libero hic doloribus accusantium asperiores deserunt possimus animi minima cumque illo labore! Architecto est neque, quam repellat, tenetur distinctio molestias ut delectus similique modi eaque voluptate dicta quia repudiandae laudantium eum laborum minus autem labore hic error voluptas ullam! Natus, voluptatibus quas rem earum eaque unde recusandae voluptates excepturi molestias ab, tenetur vel officiis enim esse nostrum eveniet cupiditate totam ex qui quidem inventore voluptate? Quas obcaecati sapiente qui, dolores vero dolore optio, accusamus dolor officiis cum quis! Ad voluptatum deserunt animi incidunt molestiae, earum, labore tenetur saepe aperiam cum impedit. Rem, sequi perspiciatis fugiat id natus deserunt consectetur harum voluptatum neque blanditiis delectus recusandae, quo eos iste incidunt aut soluta non ducimus ut voluptate consequatur pariatur hic facilis amet? A quas dolorem quis harum pariatur laboriosam odio, cum rem eius iste beatae laudantium nulla. Consequatur veniam, dolorem ipsam dolore iste pariatur omnis illum itaque, consequuntur facilis nobis quae asperiores dolorum aliquam laudantium, earum explicabo numquam. Dolorum ducimus fugiat at impedit sint maxime minima tenetur, itaque, libero tempore iusto, eius voluptates odit? Perferendis distinctio hic dolores. Temporibus assumenda vero rem cupiditate debitis, quod ab recusandae mollitia? Dolorem, corporis illo? Consequatur, voluptatem eius, culpa nesciunt atque dolor neque repellendus libero eligendi hic facilis sit! Quas earum ipsa illum fugiat, suscipit, soluta sunt ullam ea asperiores esse officiis atque quis quae, eligendi laboriosam dignissimos quod ducimus incidunt fugit repellendus repudiandae. Libero, molestiae? Animi sed quas ea quos placeat beatae architecto rem, vel nihil enim asperiores minus provident hic iusto voluptates eos tempora necessitatibus consectetur dolor repudiandae porro dolore. Labore quos harum quae exercitationem neque asperiores deserunt delectus unde ullam non tempore laborum consequatur commodi sequi, voluptates iste in quasi eius. Eligendi sunt vel est praesentium molestiae dicta laboriosam modi, hic voluptas. Odio delectus quasi, sequi cumque itaque eligendi ullam tenetur odit quibusdam? Similique accusantium libero eum voluptatem blanditiis nam provident tenetur quisquam doloremque explicabo qui autem cupiditate consequuntur, soluta at inventore fugit voluptates rem. Laboriosam eum nam itaque atque molestiae quasi tempora quas minus ab accusantium, consequatur fugiat? Illum tenetur aliquid quis, dolorem fugiat recusandae praesentium ipsam dolores maxime, est, doloribus quidem sit error delectus accusantium libero saepe sapiente laboriosam rerum nihil quaerat cupiditate a ab. Adipisci, dolore. Iste, reiciendis cumque culpa aspernatur consequuntur modi, tempore quaerat fugiat nesciunt alias deserunt voluptatum facilis aperiam quae inventore voluptate quam laudantium, rerum sit expedita itaque! At iusto nobis sit dicta repudiandae cupiditate?</p>
                </div>
            </div>
            {/* FOOTER */}
            <div className='w-full bg-white flex flex-col py-3 px-5 items-center justify-between'>
                <p className='font-bold text-sky-400 text-center'>© 2022 TODOS LOS DERECHOS RESERVADOS</p>
                <p className='font-bold text-sky-200 text-[12px]'>Sitio desarrollado por:</p>
                <p className='font-bold text-sky-200 text-[12px]'> Andres Poepsel Vásquez</p>
            </div>
        </div>
    </div>
  )
}
