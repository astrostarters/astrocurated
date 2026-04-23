import { Search } from "lucide-react";
import { resources } from "./data/resources";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export function Resources() {
  return (
    <section>
      <header>
        <h2 className="font-medium">Browse Resources</h2>
      </header>
      <InputGroup className="my-4">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <div>
        {resources.map((resource) => (
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
        ))}
      </div>
    </section>
  );
}
