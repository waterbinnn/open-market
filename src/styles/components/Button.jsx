/** @jsxImportSource @emotion/react */
import { colors } from '../constants/colors';

const sizeStyles = {
    sm: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '20px',
        padding: '10px 25px',
    },

    ms: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '20px',
        padding: '17px 68px',
    },
    md: {
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '22px',
        padding: '19px 223px',
    },
    lg: {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '30px',
        padding: '19px 87px',
    },
};

export function Button({
    children,
    size = 'md',
    background = 'green',
    color = 'white',
    border = 'none',
}) {
    return (
        <button
            css={{
                borderRadius: '5px',
                border: '1px solid',
                borderColor: colors[border],
                backgroundColor: colors[background],
                color: colors[color],
                ...sizeStyles[size],
                textAlign: 'center',
                cursor: 'pointer',
            }}
        >
            {children}
        </button>
    );
}

{
    /* <Button size="ms" background="dark" color="white">버튼</Button> */
}
