import {useAuth} from "../../app/AuthProvider.tsx";
import Logo from "../../components/shared/Logo.tsx";
import Input from "../../components/ui/Input.tsx";
import Button from "../../components/ui/Button.tsx";
import {type MouseEvent, useEffect, useState} from "react";
import {validateFullName , validatePassword} from "../../utils/validate.ts";
import {useNavigate} from "react-router";

interface IErrors {
    passwordCompare: string | null;
    fullname: string | null;
    password: string | null;
}


const AuthPage = () => {
    const {isRegistered, register , login} = useAuth()
    const [errors , setErrors] = useState<IErrors | null>(null)
    const [password, setPassword] = useState<string>('')
    const [confPassword, setConfPassword] = useState<string>('')
    const [fullName, setFullName] = useState<string>('')
    const [isDisabled , setIsDisabled] = useState(false)
    const navigate = useNavigate()


    const submitHandle = async (e:MouseEvent<HTMLButtonElement>):Promise<void> => {
            e.preventDefault()
            setIsDisabled(true)
            let errors: IErrors = {
                passwordCompare: null,
                password: null,
                fullname: null
            }
            if(isRegistered) {
               errors.password = validatePassword(password)
               if(errors.password) return
               const isOk = await login(password)
               isOk && navigate('/dashboard')
            }else {

                if(password != confPassword) {
                    errors.passwordCompare = '* Passwords are not equal'
                }
                errors.fullname = validateFullName(fullName)
                errors.password = validatePassword(password)
                setErrors(errors)
                if(errors.passwordCompare || errors.fullname || errors.password) return
                const isOk = await register(fullName , password)
                isOk && navigate('/dashboard')
            }
    }

    useEffect(() => {
        setErrors(null)
        setIsDisabled(false)
    }, [password , fullName , confPassword])

    return (
        <div className={'flex flex-col min-h-screen items-center justify-evenly'}>
            <Logo logoText={'text-4xl'} nameText={'text-4xl'}/>
            <form className={' text-gray-400 rounded-xl  border-white/10 gap-8 flex-col px-5 py-7 flex md:w-xl w-96 dark:bg-[#0f0f14]'}>
                <h3 className={'text-3xl text-white text-center font-medium'}>{isRegistered ? 'Welcome back' : "Register" }</h3>
                    <Input isHidden={isRegistered} placeholder={'Fullname'} autoComplete={'name'} value={fullName} error={errors?.fullname} changeValue={setFullName}/>
                    <Input type={'password'} placeholder={'Password'} autoComplete={isRegistered ? 'current-password' : 'new-password'} error={errors?.password} value={password} changeValue={setPassword}/>
                    {!isRegistered && <Input type={'password'} autoComplete={'new-password'} error={errors?.passwordCompare} value={confPassword} changeValue={setConfPassword} placeholder={'Confirm password'}/>}
                    <Button disabled={isDisabled} onClick={submitHandle}>{isRegistered ? "Log in" : "Register"}</Button>
            </form>
        </div>
    )
}

export default AuthPage