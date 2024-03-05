
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRldDto {

    @ApiProperty({
        type: String,
        description: 'membership_status',
        required:false
    })
    @IsString()
    @IsOptional()
    membership_status: string;

    @ApiProperty({
        type: Number,
        description: 'locus_id',
        required:false
    })
    @IsNumber()
    @IsOptional()
    locus_id: number;

    @ApiProperty({
        type: Number,
        description: 'region_id',
        required:false
    })
    @IsNumber()
    @IsOptional()
    region_id: number;

    @ApiProperty({
        type: Number,
        description: 'locus_member_id',
    })
    @IsNumber()
    @IsOptional()
    locus_member_id: number;

    @ApiProperty({
        type: Boolean,
        description: 'isActive',
        required:false,
    })
    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}
