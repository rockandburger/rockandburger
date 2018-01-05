import {the} from './utils'
import isMobile from './vendors/isMobile'

export default function moveOnMobile(){

    const move = the('.move')
    const here = the('.here')

    here.appendChild(move)
    
}