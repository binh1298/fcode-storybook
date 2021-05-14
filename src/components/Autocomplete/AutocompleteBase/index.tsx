import {
    Autocomplete as MaterialAutocomplete,
    AutocompleteProps as MaterialAutocompleteProps,
} from "@material-ui/lab";

export interface AutocompleteBaseProps
    extends MaterialAutocompleteProps<Object, boolean, boolean, boolean> {}

const AutoCompleteBase = (props: AutocompleteBaseProps) => {
    return <MaterialAutocomplete {...props} />;
};

export default AutoCompleteBase;
