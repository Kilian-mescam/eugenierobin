import Form from "next/form"
import { Input } from "@/components/ui/input"
import SearchButton from "@/components/SearchButton"

export default function ProjectSearch() {
    return (
        <Form
            action="/projects"
            className="flex gap-2 items-center"
        >
            <Input
                name="searchText"
                type="text"
                placeholder="Search Projects"
                className="w-full"
            />
            <SearchButton />
        </Form>
    )
}