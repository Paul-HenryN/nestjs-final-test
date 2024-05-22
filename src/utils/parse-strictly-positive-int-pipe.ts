import {
    ArgumentMetadata,
    BadRequestException,
    Injectable,
    PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseStrictlyPositiveIntPipe implements PipeTransform<string> {
    transform(value: string, metadata: ArgumentMetadata) {
        if (
            !(
                this.isNumeric(value) &&
                this.isStrictlyPositiveInt(Number(value))
            )
        ) {
            throw new BadRequestException(
                `${metadata.data} must be a strictly positive integer`,
            );
        }

        return Number(value);
    }

    isNumeric(value: string): boolean {
        return /^[0-9]+$/.test(value);
    }

    isStrictlyPositiveInt(value: number) {
        return Number.isInteger(value) && value > 0;
    }
}
