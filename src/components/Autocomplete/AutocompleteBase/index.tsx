import {
    Autocomplete as MaterialAutocomplete,
    AutocompleteProps as MaterialAutocompleteProps,
} from "@material-ui/lab";

export interface AutocompleteBaseProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
> extends MaterialAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {}

const AutoCompleteBase = <
    T extends {},
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
>(
    props: AutocompleteBaseProps<T, Multiple, DisableClearable, FreeSolo>
) => {
    return <MaterialAutocomplete {...props} />;
};

export default AutoCompleteBase;
