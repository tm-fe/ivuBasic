import Vue, { DirectiveOptions } from 'vue'

/** Options used in Loading service */
export interface Loading extends Vue {
    size?: string,
    loadingText?: string,
    spinner?: string
    spinnerSize?: number
    customClass?: string
}

export declare function vLoading(options: any): DirectiveOptions;
