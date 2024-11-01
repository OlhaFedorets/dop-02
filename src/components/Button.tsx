import React from 'react';
import s from './Button.module.css'


// type PropsType = {
//     title?: string
//     onClick: () => void
//     color?: string
//     children: React.ReactNode
// }


// export const Button = (props: PropsType) => {
//     const {onClick, title, children, ...restProps} = props;
//     console.log(restProps.color)
//
//     return (
//         <button onClick={onClick}>{children}</button>
//     );
// };

type ColorsProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: string
    disabled?: boolean
} & Omit<ColorsProps, 'color4' | 'color5'>;

export const Button = (props: ButtonProps) => {
    const {
        onClick,
        title,
        children,
        className,
        color,
        disabled,
        ...restProps
    } = props;

    // const finalClassName: string = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName: string = s.button + ' ' + s.red

    // const finalClassName: string =`${s.button} ${s.default}`

    // const finalClassName: string =`
    // ${s.button}
    // ${color === 'red' ? s.red : s.secondary}
    // `

    const finalClassName: string =`
    ${s.button}
    ${color === 'red' ? s.red : color==='secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}
    `

    return (
        // <button onClick={onClick} {...restProps}>{children}</button>

        <button onClick={onClick} className={finalClassName}>{children}</button>
    );
};
