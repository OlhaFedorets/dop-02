import React, {ReactNode} from 'react';

type Props = {
    croses: Croses[]
    children: ReactNode
}

type Croses = {
    id: number
    model: string
    size: string
}

export const Croses = ({croses, children}: Props) => {
    return (
        <div>
            <ol>
                {croses.map((el: Croses) => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span> -{el.model}</span>
                            <span>- {el.size}</span>
                        </li>
                    )
                })}
            </ol>
            {children}
            <hr/>
        </div>
    );
};
