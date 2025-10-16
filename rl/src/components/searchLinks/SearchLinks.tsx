import { useLinkStore } from "@/store/useLinkStore";
import { Input } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { debounce } from "lodash";


const SearchLinks = () => {
    const searchLink = useLinkStore((state) => state.searchLink)
    const { register, watch } = useForm();

    const searchTerm = watch('search') || '';


    const debouncedSearch = useCallback(
        debounce((term: string) => {
            searchLink(term);
        }, 300),
        [searchLink]
    );

    useEffect(() => {
        debouncedSearch(searchTerm);
    }, [searchTerm, debouncedSearch]);

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    return <Input mb={50} {...register('search')} placeholder="Поиск" variant="flushed" />
}

export default SearchLinks