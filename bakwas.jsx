<div className="flex flex-col gap-2 col-span-2">
<label htmlFor="" className="text-lg font-semibold">Area/Street/Village</label>
<input
    onChange={handleFormValue}
    required type="text" name="address" className="p-2 rounded border border-gray-300"
    value={formvalue.address} />
</div>
<div className="flex flex-col gap-2">
<label htmlFor="" className="text-lg font-semibold">City</label>
<input
    onChange={handleFormValue}
    required type="text" name="city" className="p-2 rounded border border-gray-300"
    value={formvalue.city} />
</div>
<div className="flex flex-col gap-2">
<label htmlFor="" className="text-lg font-semibold">State</label>
<input
    onChange={handleFormValue}
    required type="text" name="state" className="p-2 rounded border border-gray-300"
    value={formvalue.state} />
</div>
<div className="flex flex-col gap-2">
<label htmlFor="" className="text-lg font-semibold">Country</label>
<input
    onChange={handleFormValue}
    required type="text" name="country" className="p-2 rounded border border-gray-300"
    value={formvalue.country} />
</div>
<div className="flex flex-col gap-2">
<label htmlFor="" className="text-lg font-semibold">Pincode</label>
<input
    onChange={handleFormValue}
    required type="number" name="pincode" className="p-2 rounded border border-gray-300"
    value={formvalue.pincode} />
</div>
