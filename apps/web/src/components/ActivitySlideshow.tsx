import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivitySlideshowProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    images: string[];
}

const ActivitySlideshow = ({ open, onOpenChange, title, images }: ActivitySlideshowProps) => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

    return (
        <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setCurrent(0); }}>
            <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black/95 border-border">
                <DialogTitle className="sr-only">{title}</DialogTitle>
                <div className="p-4 pb-2">
                    <h3 className="text-white font-serif font-bold text-lg truncate">{title}</h3>
                    <p className="text-white/60 text-xs">{current + 1} / {images.length}</p>
                </div>

                <div className="relative aspect-[16/10] w-full">
                    <img
                        src={images[current]}
                        alt={`${title} - Photo ${current + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex gap-2 p-4 pt-2 overflow-x-auto">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={cn(
                                "w-16 h-12 rounded overflow-hidden border-2 shrink-0 transition-all",
                                i === current ? "border-primary opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                            )}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ActivitySlideshow;
