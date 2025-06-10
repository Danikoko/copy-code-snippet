export interface CopyOptions {
    selector?: string;
    buttonText?: string;
    buttonClassName?: string;
    copiedText?: string;
    timeout?: number;
    position?: 'top-right' | 'top-left';
    disableDefaultStyle?: boolean;
}
declare const copyCodeSnippet: (copyOptions?: CopyOptions) => void;
export default copyCodeSnippet;
