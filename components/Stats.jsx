"use client"

import CountUp from "react-countup";

const Stats = () => {
    // Calculate years of experience based on two jobs
    const calculateYearsOfExperience = () => {
        // Job 1: June 2024 to May 2025
        const job1Start = new Date("2024-06-01");
        const job1End = new Date("2025-05-31");
        
        // Job 2: August 2025 to present
        const job2Start = new Date("2025-08-01");
        const currentDate = new Date();
        
        // Calculate months for each job (using 30.44 average days per month)
        const job1MonthsMs = job1End - job1Start;
        const job2MonthsMs = currentDate - job2Start;
        
        const job1Months = job1MonthsMs / (1000 * 60 * 60 * 24 * 30.44);
        const job2Months = job2MonthsMs / (1000 * 60 * 60 * 24 * 30.44);
        
        // Total months of experience
        const totalMonths = job1Months + job2Months;
        const yearsOfExperience = totalMonths / 12;
        
        return Math.floor((yearsOfExperience + 0.0001) * 2) / 2; // Round down to 0.5 decimal place
    };

    const stats = [{
        num: calculateYearsOfExperience(), text: "Years of Experience", suffix: "",
    }, {
        num: 28, text: "Projects completed", suffix: "",
    }, {
        num: 7, text: "Technologies mastered", suffix: "",
    }, {
        num: 1500, text: "Code commits", suffix: "+",
    },]
    return (<section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto al:max-w-none">
                {stats.map((item, index) => {
                    return (<div className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
                                 key={index}>
                        <div className="flex items-baseline">
                            <CountUp end={item.num} duration={5} delay={2} decimals={index === 0 ? 1 : 0}
                                     className="text-4xl xl:text-6xl font-extrabold"/>
                            {item.suffix && <span className="text-4xl xl:text-6xl font-extrabold">{item.suffix}</span>}
                        </div>
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                    </div>)
                })}
            </div>
        </div>
    </section>)
}
export default Stats
