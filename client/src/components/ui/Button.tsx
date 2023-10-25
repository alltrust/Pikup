import '../../stories/button.css'

interface ButtonProps {
    /**some description */

    primary?: boolean
    backgroundColor?: string
    size?: 'small' | 'medium' | 'large'
    label?: string
    onClick?: () => void
    isDisabled?: boolean
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    isDisabled,
    ...props
}: ButtonProps) => {
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary'
    return (
        <button
            type="button"
            className={[
                'storybook-button',
                `storybook-button--${size}`,
                mode,
            ].join(' ')}
            style={{ backgroundColor }}
            disabled={isDisabled}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button
