import { Status } from "../models/status.enum";
import Resident from "./resident/Resident";




export const RESIDENTS: Resident[] = [
    new Resident(1,"a aa", 20, true,"city a1","https://i.pinimg.com/736x/ab/6c/69/ab6c69b36287628b0eba043827c1c74a.jpg","new stareet 1", 2000, Status.A ),
    new Resident(2,"b bb", 21, false,"city b2","https://i.pinimg.com/736x/ab/6c/69/ab6c69b36287628b0eba043827c1c74a.jpg","new stareet 2", 2002, Status.B ),
    new Resident(3,"c cc", 23, true,"city c3","https://i.pinimg.com/736x/ab/6c/69/ab6c69b36287628b0eba043827c1c74a.jpg","new stareet 3", 2004, Status.C ),
    new Resident(4,"d dd", 24, false,"city d4","https://i.pinimg.com/736x/ab/6c/69/ab6c69b36287628b0eba043827c1c74a.jpg","new stareet 4", 2006, Status.D ),
    new Resident(5,"e ee", 25, true,"city e5","https://i.pinimg.com/736x/ab/6c/69/ab6c69b36287628b0eba043827c1c74a.jpg","new stareet 5", 2008, Status.A ),
    new Resident(6,"f ff", 26, false,"city f6","https://i.pinimg.com/736x/ab/6c/69/ab6c69b36287628b0eba043827c1c74a.jpg","new stareet 6", 2010, Status.B ),
  ]
