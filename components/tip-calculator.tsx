"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TipCalculator(){

const [billAmount, setBillAmount] = useState<number | null> (null);
const [tipPercentage, setTipPercentage] = useState<number | null > (null);
const [tipAmount, setTipAmount] = useState<number>(0);
const [totalAmount, setTotalAmount] = useState<number>(0);

const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>):void =>{
    setBillAmount(parseFloat(e.target.value));
};

const handleTipPercentageChange = (e:ChangeEvent<HTMLInputElement>):void =>{
    setTipPercentage(parseFloat(e.target.value));
}

const calculateTip =():void => {
    if(billAmount!= null && tipPercentage !== null){
        const tip = billAmount * (tipPercentage / 100 );
        setTipAmount(tip);
        setTotalAmount(billAmount + tip);
    }
}

return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 dark:bg-blue-900">
        <Card className="w-full max-w-md p-6 bg-green-200 dark:bg-green-800 shadow-lg rounded-lg">
            <CardHeader>
                <CardTitle className="text-center">Tip Calculator</CardTitle>
                <CardDescription>Enter the bill amount and tip percentage to calculate the tip and total bill.</CardDescription>

            </CardHeader>
            <CardContent className="space-y-4 ">
                <div className="grid gap-2">
                    <Label htmlFor="bill-amount">Bill Amount</Label>
                    <Input id="bill-amount"
                    type="number"
                    placeholder="Enter Bill Amount"
                    value ={billAmount!==null?billAmount:""}
                    onChange= {handleBillAmountChange}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="tip-percentage">Tip Percentage</Label>
                    <Input id="tip-percentage"
                    type="number"
                    placeholder="Enter Tip Percentage"
                    value={tipPercentage!=null ? tipPercentage:""}
                    onChange={handleTipPercentageChange }
                    
                    />


                </div>
                <Button onClick={calculateTip} className="bg-green-800 ">Calculate</Button>
            </CardContent>
            <CardFooter className="grid gap-2">
                <div className="flex items-center justify-between"><span>Tip Amount:</span>
                <span className="font-bold">${tipAmount.toFixed(2)}</span>

                </div>
                <div className="flex items-center justify-between">
                    <span>Total Amount:</span>
                    <span className="font-bold">${totalAmount.toFixed(2)}</span>
                </div>
            </CardFooter>
        </Card>

    </div>

);
}