import { Component } from "@angular/core";
import { Book } from "src/app/data/book";

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

    public books: Book[] = [
        {
            "_id": "61ba4417591ee9186390a4f0",
            "isbn": "9781393495574",
            "id": "the-accursed-god",
            "title": "The Accursed God",
            "author": "Vivek Dutta Mishra",
            "pages": 380,
            "rating": 4.9,
            "votes": 49,
            "description": "THE LOST EPIC \n\n  The story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions.  THE ACCURSED GOD ================  Long before the epic battle, long before even the birth of Kurukshetra, a man swore on his father’s pyre to avenge against the mightiest empire, any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers — taking the mantle of a fabled Accursed God.   In the clash that followed, Aryavart heard several more oaths by the side of more burning pyres, until, a young king decided that no price is too high for peace. Little did he know that the price would be a war engulfing the entire Aryavart, where few would live to tell the tale. And only one man can delay the inevitable if not prevent it. He is the accursed God and even he doesn’t know that destiny is like a quicksand, the more he tries to prevent it, the faster Aryavart moves towards the ultimate catastrophe.   Discover the saga of a man’s journey to that of a legendary and universally hated Accursed God, the saga of the ruthless ambitions and unfulfilled loves, endless deceits and vengeful oaths, and the saga of the battles to prevent the ultimate war.  TESTIMONIALS =============  When is the last time you finished a book and discover something? Here is a gripping and intriguing take on the greatest epic of all time through the eyes of its pivotal character that leaves your mind exhilarated, adding a fresh perspective to the tale that’s known, yet unknown. Throughout the fast action-packed book, the author masterfully blends politics, war and science and blurs the gap between love and hate, peace and war, and fiction and reality. A must-read novel which will leave you wanting for more. --- Colonel Avanish, Indian Army",
            "tags": [
                "epic",
                "indian",
                "mahabharata",
                "bhishma",
                "history"
            ],
            "series": "The Lost Epic",
            "seriesIndex": "1",
            "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg",
            "reviews": [
                {
                    "name": "Vidhya",
                    "title": "Great Book of Epic Readers",
                    "details": "Great Epic fiction based on Mahabharata. Must read",
                    "rating": 5,
                    "_id": "61ba4b79ed970f8bb2d31435"
                },
                {
                    "name": "Akash",
                    "title": "A completely new take",
                    "details": "I know Mahabharata. But this is still amazing to read",
                    "rating": 4,
                    "_id": "61ba4b79ed970f8bb2d31436"
                },
                {
                    "name": "Saroj",
                    "title": "A Prequel to Mahabharata",
                    "details": "If you think you know Mahabharata, Think again. Imagine a Mahabharata without Kaurava and Pandava",
                    "rating": 5,
                    "_id": "61ba4b79ed970f8bb2d31437"
                }
            ],
            "price": 179,
            "authorId": "vivek-dutta-mishra"
        },

        {
            "_id": "61ba4417591ee9186390a4f9",
            "isbn": "8129135728",
            "id": "half-girl-friend",
            "title": "Half Girl Friend",
            "author": "Chetan Bhagat",
            "pages": 280,
            "rating": 3.2,
            "votes": 8300,
            "description": "Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat.[1] The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves.[2][3] This is Bhagat's sixth novel which was released on 1 October 2014[4] by Rupa Publications. The novel has also been published in Hindi[5] and Gujarati[6] versions as well.  Dedicated to \"non English-types\", as Chetan Bhagat wrote, the book divulges the sentiments and linguistic struggles of a backward rural Bhojpuri-laced Hindi-speaking boy from Bihar as he enrolls himself at the prestigious English-medium St. Stephen’s College, New Delhi, and falls in love with a \"high class English-speaking rich Delhi girl\" schooled at Modern School, New Delhi. The girl does not admit the relationship but agrees to be his \"half girlfriend\".[7] Chetan Bhagat commented, \"Half-Girlfriend, to me, is a unique Indian phenomenon, where boys and girls are not clear about their relationship status with each other. A boy may think he is more than friends with the girl, but the girl is still not his girlfriend. Hence, I thought we needed a term like 'Half girlfriend'. Because, in India, that is what most men get.\"[7]",
            "tags": [
                "fiction",
                "indian",
                "young adult",
                "college",
                "romance"
            ],
            "series": "",
            "seriesIndex": "",
            "cover": "https://images-na.ssl-images-amazon.com/images/I/712HEn9SNwL.jpg",
            "price": 242,
            "authorId": "chetan-bhagat",
            "reviews": []
        },
        {
            "_id": "61ba4417591ee9186390a500",
            "title": "The Lost Symbol",
            "isbn": "0552161233",
            "id": "the-lost-symbol",
            "author": "Dan Brown",
            "price": 317,
            "description": "‘Impossible to put down . . . Another mind-blowing Robert Langdon story’ New York Times\n\nA mysterious invitation brings Robert Langdon to Washington DC.\n\nThere, he is presented with a sequence of bloody clues which he must unravel if he is to prevent a terrible plan.\n\nBut all is not as it seems in this dangerous city – an ancient organisation will reassert its power once more. The only man standing in its way - Robert Langdon.",
            "tags": [],
            "cover": "https://images-na.ssl-images-amazon.com/images/I/51Zutc5AWcL._SX319_BO1,204,203,200_.jpg",
            "reviews": [],
            "rating": 3.6,
            "authorId": "dan-brown"
        }
    ];



}