export const useUtilities = () => {
    function titleCase(str: string) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toUpperCase();
            }
        );
    }
    return {titleCase};
}