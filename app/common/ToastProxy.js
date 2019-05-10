// import React, {Component} from 'react';
import Toast from 'react-native-root-toast'

//  toast 
export default function ToastShow(text,duration = Toast.durations.SHORT, position = Toast.positions.CENTER)
{
    return Toast.show(text,
        {
            duration: duration,
            position: position,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });
}


export   function ToastLong(text,duration = Toast.durations.LONG, position = Toast.positions.CENTER)
{
    return Toast.show(text,
        {
            duration: duration,
            position: position,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });
}

export function hideToast(toast) {
    Toast.hide(toast)
}