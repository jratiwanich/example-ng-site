import { async, TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';
describe('ImageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ImageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/ui/image/image.component.spec.js.map