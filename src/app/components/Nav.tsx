import { BarChart, Bell, Box, Home, LogOut, PiIcon, PieChart, Search, SunMoon } from "lucide-react"

export default function Nav() {

    const IconsArray = [<Search key={'search'} size={16} />, <Home key={'home'} size={16} />, <BarChart key={'bar'} size={16} />, <Bell key={'bell'} size={16} />, <PieChart key={'pie'} size={16} />, <Box key={''} size={16} />]
    return (
        <div className="bg-[#09090a] flex flex-col justify-between items-center rounded-2xl h-[95%]">
            <ul className="space-y-6 p-4 flex flex-col items-center">
                {IconsArray.map((icon, index) => (
                    <li className="hover:rounded-xl hover:bg-[#1a1b1d] hover:p-3 p-3" key={icon.key}>{icon}</li>
                ))}
            </ul>
            <ul className="space-y-3 p-4">
                <li className="hover:rounded-xl hover:bg-[#1a1b1d] hover:p-3 p-3"><LogOut size={18} /></li>
                <li className="hover:rounded-xl hover:bg-[#1a1b1d] hover:p-3 p-3"><SunMoon size={18} /></li>
            </ul>
        </div>
    )
}