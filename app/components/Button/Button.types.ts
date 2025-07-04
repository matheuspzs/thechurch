export interface ButtonProps {
    label: string;
    type?: 'primary' | 'secondary' | 'tertiary' | 'button';
    disabled?: boolean;
    urlRedirect?: string;
    onClick: () => void;
}