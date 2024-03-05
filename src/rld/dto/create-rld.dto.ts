import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRldDto {
    @ApiProperty({
        type: String,
        description: 'membership_status',
    })
    @IsString()
    @IsNotEmpty()
    membership_status: string;

    @ApiProperty({
        type: Number,
        description: 'locus_id',
    })
    @IsNumber()
    @IsNotEmpty()
    locus_id: number;

    @ApiProperty({
        type: Number,
        description: 'region_id',
    })
    @IsNumber()
    @IsNotEmpty()
    region_id: number;

    @ApiProperty({
        type: Number,
        description: 'locus_member_id',
    })
    @IsNumber()
    @IsNotEmpty()
    locus_member_id: number;
}
