import { DisplayUtils } from './utils';
import { Vec } from './vec';
import { Sprite } from './sprite';
import { Canvas } from './canvas';

export class Stage extends DisplayUtils {
    position: Vec;
    size: Vec;
    rotation: number;

    parent: Canvas | null;
    children: Sprite[];

    private _layer: number;

    private _prevpos: Vec;
    private _prevrotation: number;

	constructor({ width, height, x, y, r, parent }: { width?: number; height?: number; x?: number; y?: number; r?: number; parent?: Canvas; }) {
        super();
        
        this.size = new Vec(width ?? 0, height ?? 0);
        this.position = new Vec(x ?? 0, y ?? 0);
        this.rotation = r ?? 0;

        this.parent = parent ?? null;
        this.children = [];

        this._prevpos = new Vec(x ?? 0, y ?? 0);
        this._prevrotation = r ?? 0;

        this._layer = 0;
    }


    
}