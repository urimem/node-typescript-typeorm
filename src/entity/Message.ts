import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number

    @Column("timestamp")
    sentAt: Date

    @OneToOne(() => User)
    @JoinColumn()
    from: User

    @OneToOne(() => User)
    @JoinColumn()
    to: User

    @Column({ length: 250 })
    title: string

    @Column({ type: "text", nullable: true })
    content: string

    @Index({ unique: false })
    @Column()
    published: boolean
}
