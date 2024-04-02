import Image from "next/image";
import notifications from "../constants/Notifications";

function Notifications() {
    return (
        <div className="w-full flex flex-col gap-2 mb-24 mt-14">
            {
                notifications.map((notification) => (
                    <div key={notification.id} className="flex flex-col gap-2 bg-white text-[var(--secondary)] p-4">
                        <div className="flex gap-2 items-center">
                            <Image src={notification.icon} alt={notification.title} width={36} height={40} />
                            <div>
                                <h3 className="text-lg font-bold leading-none">{notification.title}</h3>
                                <p className="text-xs">{notification.time}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">{notification.message}</p>
                            <a href="" className="text-[var(--primary)] self-end">Read more</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Notifications;