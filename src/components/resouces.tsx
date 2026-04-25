import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { type Resource, resources } from "@/data/resources";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export function Resources() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Resource[]>(resources);

  const fuse = useMemo(
    () =>
      new Fuse(resources, {
        keys: ["title", "description", "type"],
        threshold: 0.3,
      }),
    []
  );

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) {
      setFiltered(resources);

      return;
    }

    const result = fuse.search(query).map((result) => result.item);

    setFiltered(result);
  };

  return (
    <section>
      <header>
        <h2 className="font-medium">Browse Resources</h2>
      </header>
      <form className="my-4" onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroupInput
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            value={query}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </form>
      <div>
        {filtered.length > 0 ? (
          filtered.map((resource) => (
            <a
              className="mb-4 block last-of-type:mb-0"
              href={resource.url}
              key={resource.url}
              rel="noopener"
              target="_blank"
            >
              <Card size="sm">
                <CardContent>
                  <p className="text-balance font-medium">{resource.title}</p>
                  <p className="mt-1 line-clamp-2 text-muted-foreground">
                    {resource.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Badge className="capitalize">{resource.type}</Badge>
                </CardFooter>
              </Card>
            </a>
          ))
        ) : (
          <p className="flex items-center justify-center border border-dashed p-8 text-muted-foreground text-sm">
            No results found.
          </p>
        )}
      </div>
    </section>
  );
}
