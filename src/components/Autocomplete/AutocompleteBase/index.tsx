import {
    Autocomplete as MaterialAutocomplete,
    AutocompleteProps as MaterialAutocompleteProps,
} from "@material-ui/lab";

export interface AutocompleteBaseProps<
    T extends {},
    Multiple extends boolean | undefined = boolean,
    DisableClearable extends boolean | undefined = boolean,
    FreeSolo extends boolean | undefined = boolean
> extends MaterialAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {}

const AutoCompleteBase = <T extends {}>(props: AutocompleteBaseProps<T>) => {
    return <MaterialAutocomplete {...props} />;
};

export default AutoCompleteBase;
