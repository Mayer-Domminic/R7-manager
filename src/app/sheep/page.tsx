"use client"
import { useState } from "react"
import { useAuth } from "@/app/providers"
import { Save } from "lucide-react"
import { Button } from "@/app/components/ui/button"

interface Lamb {
  lambId: string
  date: string
  time: string
  sex: string
  weight: string
}

interface Sheep {
  id: string
  eweVisualId: string
  paintBrand: string
}

export default function SheepPage() {
  const { isLoggedIn } = useAuth()
  const [selectedSheep, setSelectedSheep] = useState<string | null>(null)
  const [eweVisualId, setEweVisualId] = useState("95526")
  const [paintBrand, setPaintBrand] = useState("576")
  const [lambs, setLambs] = useState<Lamb[]>([
    { lambId: "", date: "", time: "", sex: "", weight: "" },
    { lambId: "", date: "", time: "", sex: "", weight: "" },
    { lambId: "", date: "", time: "", sex: "", weight: "" },
  ])

  const sheepData: Sheep[] = [
    { id: "1", eweVisualId: "95526", paintBrand: "576" },
    { id: "2", eweVisualId: "75406", paintBrand: "55" },
  ]

  if (!isLoggedIn) {
    return <div>Please log in to view this page</div>
  }

  const handleLambChange = (index: number, field: keyof Lamb, value: string) => {
    const newLambs = [...lambs]
    newLambs[index] = { ...newLambs[index], [field]: value }
    setLambs(newLambs)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitted data:", { eweVisualId, paintBrand, lambs })
  }

  const inputClass = "w-full p-3 border border-emerald-300 rounded-md bg-white focus:ring-2 focus:ring-stone-400 focus:border-stone-400"
  const labelClass = "block text-emerald-700 font-semibold mb-2"

  if (!selectedSheep) {
    return (
      <div className="container mx-auto mt-10 p-6 bg-stone-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6">Sheep List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sheepData.map((sheep) => (
            <button
              key={sheep.id}
              onClick={() => setSelectedSheep(sheep.id)}
              className="block p-4 bg-emerald-100 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <h3 className="text-xl font-semibold text-emerald-700">
                Ewe ID: {sheep.eweVisualId}
              </h3>
              <p className="text-emerald-600">Paint Brand: {sheep.paintBrand}</p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-stone-50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-emerald-800">
          Ewe Information (ID: {selectedSheep})
        </h2>
        <Button 
          onClick={() => setSelectedSheep(null)}
          /*variant="outline"*/
        >
          Back to List
        </Button>
      </div>
      
      {/* Rest of your form code stays the same */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label className={labelClass}>Ewe Visual ID</label>
          <input
            type="text"
            value={eweVisualId}
            onChange={(e) => setEweVisualId(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Paint Brand</label>
          <input
            type="text"
            value={paintBrand}
            onChange={(e) => setPaintBrand(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-emerald-800 mb-6">
        Lamb Information
      </h3>

      <form onSubmit={handleSubmit}>
        {lambs.map((lamb, index) => (
          <div key={index} className="mb-8 p-6 bg-stone-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold text-emerald-800 mb-4">
              Lamb {index + 1}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Lamb ID</label>
                <input
                  type="text"
                  value={lamb.lambId}
                  onChange={(e) => handleLambChange(index, "lambId", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Date</label>
                <input
                  type="date"
                  value={lamb.date}
                  onChange={(e) => handleLambChange(index, "date", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Time</label>
                <input
                  type="time"
                  value={lamb.time}
                  onChange={(e) => handleLambChange(index, "time", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Sex</label>
                <select
                  value={lamb.sex}
                  onChange={(e) => handleLambChange(index, "sex", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Weight (kg)</label>
                <input
                  type="number"
                  value={lamb.weight}
                  onChange={(e) => handleLambChange(index, "weight", e.target.value)}
                  className={inputClass}
                  step="0.1"
                />
              </div>
            </div>
          </div>
        ))}
        <Button type="submit">
          <Save className="mr-2" size={18} />
          Save Data
        </Button>
      </form>
    </div>
  )
}