import { async, TestBed } from '@angular/core/testing';
import { ColComponent } from './col.component';
describe('ColComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ColComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ColComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/jak/Documents/projects/headwire/projects/pagerender-ng4/src/app/ui/col/col.component.spec.js.map