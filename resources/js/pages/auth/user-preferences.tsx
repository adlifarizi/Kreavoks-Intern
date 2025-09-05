import { Head, Link, useForm } from "@inertiajs/react";
import { User, FileCheck, Star } from "lucide-react";

const topics = [
    "UI/UX Design",
    "Data Science",
    "DevOps",
    "Website Development",
    "App Development",
    "Umum",
    "Lainnya",
];

function TopicButton({
    topic,
    selected,
    setData,
}: {
    topic: string;
    selected: string[];
    setData: any;
}) {
    const isSelected = selected.includes(topic);
    return (
        <button
            type="button"
            onClick={() => {
                if (isSelected) {
                    setData(
                        "topic",
                        selected.filter((t) => t !== topic)
                    );
                } else {
                    setData("topic", [...selected, topic]);
                }
            }}
            className={`flex-1 border rounded-full py-2 px-4 font-medium text-sm transition text-center cursor-pointer
                ${
                    isSelected
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
                }`}
        >
            {topic}
        </button>
    );
}

export default function ProfilePreferences() {
    const { data, setData, post, processing } = useForm({
        topic: [],
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/register/user-preferences");
    };

    return (
        <div>
            <Head title="User Preferences" />
            <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 relative">
                {/* Background Blur Elements */}
                <div className="absolute left-0 bottom-0 w-[220px] h-[220px] bg-yellow-500 rounded-full blur-3xl opacity-30 z-0" />
                <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-blue-500 rounded-full blur-3xl opacity-30 z-0" />

                {/* Logo */}
                <img
                    src="/images/logo-color.svg"
                    alt="Kreavoks"
                    className="h-6 mb-8 mt-4"
                />

                {/* Stepper */}
                <div className="flex items-center justify-center mb-10 w-full max-w-lg mx-auto">
                    {/* Step 1 */}
                    <div className="flex items-center">
                        <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                            <User className="text-blue-500 w-5 h-5" />
                        </div>
                    </div>
                    {/* Line 1 */}
                    <div className="flex items-center w-60 px-2">
                        <div className="w-full h-0.5 bg-blue-500" />
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-center">
                        <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                            <FileCheck className="text-blue-500 w-5 h-5" />
                        </div>
                    </div>
                    {/* Line 2 */}
                    <div className="flex items-center w-60 px-2">
                        <div className="w-full h-0.5 bg-blue-500" />
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-center">
                        <div className="bg-white rounded-full p-2 flex items-center justify-center border border-blue-500">
                            <Star className="text-blue-500 w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Title & Subtitle */}
                <h1 className="text-2xl md:text-4xl font-semibold text-center mb-2">
                    Pilih Topik Utamamu
                </h1>
                <p className="text-gray-500 text-sm text-center mb-10">
                    Supaya kami bisa kasih materi yang tepat, pilih satu atau
                    lebih topik favoritmu.
                </p>

                {/* Topics */}
                <form
                    onSubmit={submit}
                    className="flex flex-col items-center w-full max-w-md"
                >
                    <div className="flex flex-col gap-4 mb-10 w-full">
                        <div className="flex gap-4">
                            <TopicButton
                                topic={topics[0]}
                                selected={data.topic}
                                setData={setData}
                            />
                            <TopicButton
                                topic={topics[1]}
                                selected={data.topic}
                                setData={setData}
                            />
                            <TopicButton
                                topic={topics[2]}
                                selected={data.topic}
                                setData={setData}
                            />
                        </div>
                        <div className="flex gap-4">
                            <TopicButton
                                topic={topics[3]}
                                selected={data.topic}
                                setData={setData}
                            />
                            <TopicButton
                                topic={topics[4]}
                                selected={data.topic}
                                setData={setData}
                            />
                        </div>
                        <div className="flex gap-4">
                            <TopicButton
                                topic={topics[5]}
                                selected={data.topic}
                                setData={setData}
                            />
                            <TopicButton
                                topic={topics[6]}
                                selected={data.topic}
                                setData={setData}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between w-full mt-4">
                        <Link
                            href="/register/otp"
                            className="px-6 py-2 rounded-full bg-blue-50 text-blue-500"
                        >
                            Kembali
                        </Link>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-full bg-blue-500 text-white"
                            disabled={data.topic.length === 0 || processing}
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
