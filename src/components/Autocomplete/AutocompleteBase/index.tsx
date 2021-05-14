import {
    Autocomplete as MaterialAutocomplete,
    AutocompleteProps as MaterialAutocompleteProps,
} from "@material-ui/lab";

interface Options {
    title?: string;
    description?: string;
}

export interface AutocompleteBaseProps
    extends MaterialAutocompleteProps<Options, true, true, true> {}

const AutoCompleteBase = (props: AutocompleteBaseProps) => {
    return <MaterialAutocomplete {...props} />;
};

export default AutoCompleteBase;
