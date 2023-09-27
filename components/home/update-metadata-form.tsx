import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "../ui/textarea"
import { GiMonkey, GiToken } from "react-icons/gi"

const UpdateMetadataForm = () => {
  return (
    <>
      <section id="about" className="about">
        <div id="updatemate" className="container">
          <div id="aboutmore" className="row">
            <div
              className="col-lg-12 text-center order-1 order-lg-2"
              >
               <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Update Metadata</CardTitle>
                <CardDescription>
                    Update your token metadata to be displayed in wallets
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <RadioGroup defaultValue="paypal" className="grid grid-cols-2 gap-4">
                    <div>
                        <RadioGroupItem
                            value="paypal"
                            id="paypal"
                            className="peer sr-only" />
                        <Label
                            htmlFor="paypal"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <GiToken className="mb-3 h-6 w-6" />
                            Token
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                        <Label
                            htmlFor="apple"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <GiMonkey className="mb-3 h-6 w-6" />
                            NFT
                        </Label>
                    </div>
                </RadioGroup>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Contract Information
                        </span>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label>Contract Identifier</Label>
                    <Input />
                </div>
                <div className="grid gap-2">
                    <Label>Token IDs</Label>
                    <Textarea />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Notify Metadata Update</Button>
            </CardFooter>
        </Card>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateMetadataForm;
