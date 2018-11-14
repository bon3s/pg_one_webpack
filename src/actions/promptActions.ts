export const PROMPT_VISIBLE = 'PROMPT_VISIBLE';

export const promptVisible = (value, msg) => {
    return {
        type: PROMPT_VISIBLE,
        value,
        msg,
    };

};